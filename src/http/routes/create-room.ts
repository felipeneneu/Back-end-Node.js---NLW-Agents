import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import { z } from 'zod/v4';
import { db } from '../../db/connection.ts';
import { schema } from '../../db/schema/index.ts';

export const createRoomRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    '/rooms',
    {
      schema: {
        body: z.object({
          name: z.string().min(1),
          description: z.string().optional(),
        }),
      },
    },
    async (request, replay) => {
      const { name, description } = request.body;

      const result = await db
        .insert(schema.rooms)
        .values({
          name,
          description,
        })
        .returning();

      const insertedRoom = result[0];

      if (!result[0]) {
        throw new Error('Failed to create room.');
      }

      return replay.status(201).send({ roomId: insertedRoom.id });
    }
  );
};
