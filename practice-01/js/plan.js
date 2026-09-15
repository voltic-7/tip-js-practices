"use strict";

const totalTasks = 7;
const completedTasks = 2;
const dailyLimit = 2;

if (typeof totalTasks !== "number" || typeof completedTasks !== "number" || typeof dailyLimit !== "number") {
    console.log("Ошибка: дневная норма или количество задач заданы строкой.");
} else if (!Number.isFinite(totalTasks) || !Number.isFinite(completedTasks) || !Number.isFinite(dailyLimit)) {
    console.log("Ошибка: недопустимое числовое значение.");
} else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks) || !Number.isInteger(dailyLimit)) {
    console.log("Ошибка: дробное количество.");
} else if (totalTasks < 0 || completedTasks < 0) {
    console.log("Ошибка: отрицательное количество задач.");
} else if (dailyLimit < 1) {
    console.log("Ошибка: дневная норма должна быть от 1 и выше.");
} else if (totalTasks > 1000 || dailyLimit > 1000) {
    console.log("Ошибка: превышена верхняя граница.");
} else if (completedTasks > totalTasks) {
    console.log("Ошибка: некорректное число выполненных задач.");
} else {
    let remainingTasks = totalTasks - completedTasks;

    if (remainingTasks === 0) {
        if (totalTasks === 0) {
            console.log("Задач пока нет.");
        } else {
            console.log("Все задачи уже выполнены.");
        }
        console.log("Потребуется дней: 0");
    } else {
        console.log(`Осталось задач: ${remainingTasks}`);

        let currentDay = 0;

        while (remainingTasks > 0) {
            currentDay += 1;

            // Определяем, сколько задач выполним сегодня, используя только базовый if
            let tasksToday = dailyLimit;
            if (remainingTasks < dailyLimit) {
                tasksToday = remainingTasks;
            }

            remainingTasks -= tasksToday;
            console.log(`День ${currentDay}: выполнено ${tasksToday}, осталось ${remainingTasks}`);
        }

        console.log(`Потребуется дней: ${currentDay}`);
    }
}