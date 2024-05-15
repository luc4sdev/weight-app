import { ClientSchemaType } from "@/app/components/WeightForm";

export function calculateDaysToDesiredWeight(data: ClientSchemaType) {
    const { currentweight, desiredweight } = data;

    const currentWeightKg = parseFloat(currentweight);
    const desiredWeightKg = parseFloat(desiredweight);

    if (currentWeightKg <= desiredWeightKg) {
        throw new Error('O peso atual deve ser maior que o peso desejado.');
    }

    const weightDifferenceKg = currentWeightKg - desiredWeightKg;
    const dailyWeightLossRateKg = 0.5;


    const daysToDesiredWeight = weightDifferenceKg / dailyWeightLossRateKg;

    return Math.ceil(daysToDesiredWeight);
}
