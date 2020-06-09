import { Request, Response } from "express";
import knex from "../database/connection";

class PointsController {
  async index(request: Request, response: Response){
    const {city,uf,items} = request.query;
    const parsedItems = String(items)
                              .split(',')
                              .map(item=>Number(item.trim()))

    const points = await knex("points")
                        .join('point_items','points.id','=','point_items.point_id')
                        .whereIn('point_items.item_id',parsedItems)
                        .where('city',String(city))
                        .where('uf',String(uf))
                        .distinct()
                        .select('points.*');

    if (!points) {
      return response.status(204).json({ message: "Not content" });
    }
    return response.status(200).json({points});
  }
  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = request.body;

    const point = {
      image: "imageFake",
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    };
    const trx = await knex.transaction();
    try {
      const insertedIds = await trx("points").insert(point);
      const point_id = insertedIds[0];
      const pointItems = items.map((item_id: number) => {
        return {
          item_id,
          point_id,
        };
      });
      await trx("point_items").insert(pointItems);
      await trx.commit();
      return response.json({ id: point_id, ...point });
    } catch (error) {
      await trx.rollback();
      return response.json(error);
    }
  }
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const point = await knex("points").where("id", id).first();
    if (!point) {
      return response.status(400).json({ message: "Point not found" });
    }
    const items = await knex("items")
      .join("point_items", "items.id", "=", "point_items.item_id")
      .where("point_items.point_id", id)
      .select('title');

    return response.status(200).json({point,items});
  }
}

export default PointsController;
