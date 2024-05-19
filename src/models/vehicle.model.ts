import mongoose from "mongoose";
import { Vehicle } from "../types/types";
import { Direction } from "../utils/helper";

const vehicleModel = new mongoose.Schema<Vehicle>({
    vehicleName: {
        type: String,
        trim: true,
        required: [true, 'Please enter a vehicle name']
    },
    initialPositionX: {
        type: Number,
        trim: true,
        required: [true, 'Please enter a initialPositionX']
    },
    initialPositionY: {
        type: Number,
        trim: true,
        required: [true, 'Please enter a initialPositionY']
    },
    speed: {
        type: Number,
        trim: true,
        required: [true, 'Please enter a speed']
    },
    direction: {
        type: String,
        enum: Object.values(Direction),
        trim: true,
        required: [true, 'Please enter a direction']
    },    
    scenarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Scenario',
        required: true
    }

}, {
    timestamps: true,
})

export default mongoose.model<Vehicle>('Vehicle', vehicleModel)