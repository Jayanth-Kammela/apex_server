import { Request, Response } from 'express';
import ScenarioModel from '../models/scenario.model';
import { success, error } from '../utils/helper';
import mongoose from 'mongoose';

const createScenario = async (req: Request, res: Response) => {
  const body = req.body
  try {
    const scenario = new ScenarioModel(body);
    await scenario.save();
    return res.status(201).send(success(201, 'Scenario created sucessfully', scenario));
  } catch (err: any) {
    return res.status(400).send(error(400, err?.message));
  }
};

const getScenarioById = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    if (!id) {
      return res.status(401).send(error(400, 'ID parameter is missing'));
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send(error(400, "Provide valid a Scenario Id"))
    }
    const scenario = await ScenarioModel.findById(id).populate('vehicles','vehicleName');
    if (!scenario) {
      return res.status(400).send(error(400, "No such scenario found"));
    }
    return res.status(200).send(success(200, 'Scenario retrived sucessfully', scenario));
  } catch (err: any) {
    return res.status(400).send(error(400, err?.message));
  }
};

const getAllScenarios = async (req: Request, res: Response) => {
  try {
    const scenarios = await ScenarioModel.find({})
      .populate('vehicles', 'vehicleName');
    return res.status(200).send(success(200, 'Scenarios retrived sucessfully', scenarios));
  } catch (err: any) {
    return res.status(400).send(error(400, err?.message));
  }
};

const updateScenario = async (req: Request, res: Response) => {
  const { id } = req.params
  const body = req.body
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send(error(400, "Provide valid a Scenario Id"))
    }
    const scenario = await ScenarioModel.findByIdAndUpdate(id, body);
    if (!scenario) {
      return res.status(400).send(error(400, "No such scenario found"));
    }
    return res.status(200).send(success(200, 'Scenario updated sucessfully'));
  } catch (err: any) {
    return res.status(400).send(error(400, err?.message));
  }
};

const deleteScenario = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send(error(400, "Provide valid a Scenario Id"))
    }
    const scenario = await ScenarioModel.findByIdAndDelete(id);
    if (!scenario) {
      return res.status(400).send(error(400, "No such scenario found"));
    }
    return res.status(200).send(success(200, 'Scenario delete sucessfully'));
  } catch (err: any) {
    return res.status(400).send(error(400, err?.message));
  }
};

module.exports = { createScenario, getScenarioById, getAllScenarios, updateScenario, deleteScenario }
