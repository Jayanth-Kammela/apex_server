import { Document, Types } from "mongoose";

export interface Scenario extends Document {
    scenarioId?: string;
    name: string;
    time: Number;
    vehicles: Types.ObjectId[];
}

export interface Vehicle {
    vehicleName: string;
    initialPositionX: number;
    initialPositionY: number;
    speed: number;
    direction: string;
    scenarioId: Types.ObjectId;
}

export interface SuccessResponse {
    status: boolean;
    statusCode: number;
    message: string;
    result: any;
}

export interface ErrorResponse {
    status: boolean;
    statusCode: number;
    message: string
}

export interface SuccessResponse {
    status: boolean;
    statusCode: number;
    message: string;
    result: any;
}

export interface ErrorResponse {
    status: boolean;
    statusCode: number;
    message: string;
}