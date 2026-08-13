class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = [];

        for (let i = 0; i < position.length; i++) {
            cars.push([
                position[i],
                (target - position[i]) / speed[i]
            ]);
        }

        // Closest to target first
        cars.sort((a, b) => b[0] - a[0]);

        let stack = [];

        for (let [pos, time] of cars) {
            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }/* We are not pushing in cars which join in the fleet. We are only pushing in case of a new fleet */
        }

        return stack.length;
    }
    }

