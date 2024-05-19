import mongoose from "mongoose";
import { Scenario } from "../types/types";

const scenarioModel = new mongoose.Schema<Scenario>({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please enter a scenario name']
    },
    time: {
        type: Number,
        required: [true, 'Please enter a scenario time'],
    },
    vehicles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: true
    }]
}, {
    timestamps: true,
})

export default mongoose.model<Scenario>('Scenario', scenarioModel)