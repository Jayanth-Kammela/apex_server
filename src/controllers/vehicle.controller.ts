import { Request, Response } from 'express';
import VehicleModel from '../models/vehicle.model';
import ScenarioModel from '../models/scenario.model';
import { error, success } from '../utils/helper';
import mongoose from 'mongoose';

const createVehicle = async (req: Request, res: Response) => {
  const body = req.body;
  const { id } = req.params;

  try {
    const scenario = await ScenarioModel.findById(id);
    if (!scenario) {
      return res.status(404).send(error(404, "Scenario not found"));
    }
    console.log(scenario?._id);

    const vehicle = new VehicleModel({ ...body, scenarioId: scenario?._id });

    await vehicle.save();

    scenario.vehicles.push(vehicle._id);
    await scenario.save();
    return res.status(201).send(success(201, 'Vehicle created successfully', vehicle));
  } catch (err: any) {
    return res.status(400).send(error(400, err?.message));
  }
};

const getVehicleById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send(error(400, "Provide valid a Vehicle Id"))
    }

    const vehicle = await VehicleModel.findById(id).populate('scenarioId', 'name')
    if (!vehicle) {
      return res.status(404).send(error(404, "Vehicle not found"));
    }
    return res.status(200).send(success(200, 'Vehicle retrived successfully', vehicle));
  } catch (err: any) {
    return res.status(400).send(error(400, err?.message));
  }
};

const getAllVehicles = async (req: Request, res: Response) => {
  try {
    const vehicle = await VehicleModel.find({}).populate('scenarioId', 'name')
    return res.status(200).send(success(200, 'Vehicles retrived successfully', vehicle));
  } catch (err: any) {
    return res.status(400).send(error(400, err?.message));
  }
};

const deleteVehicle = async (req: Request, res: Response) => {
  const { id } = req.params
  try {

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send(error(400, "Provide valid a Vehicle Id"))
    }
    const vehicle = await VehicleModel.findByIdAndDelete(id);
    if (!vehicle) {
      return res.status(404).send(error(404, "Vehicle not found"));
    }
    const scenario = await ScenarioModel.findByIdAndUpdate({ _id: vehicle.scenarioId }, { $pull: { vehicles: { _id: id } } }, { new: true });
    if (!scenario) {
      return res.status(400).send(error(400, "No such scenario found"));
    }
    return res.status(200).send(success(200, 'Vehicle deleted sucessfully'));
  } catch (err: any) {
    return res.status(400).send(error(400, err?.message));
  }
};

module.exports = { createVehicle, getVehicleById, getAllVehicles, deleteVehicle }