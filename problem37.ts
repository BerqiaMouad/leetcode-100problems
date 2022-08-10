// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/

function minMovesToSeat(seats: number[], students: number[]): number {
    let res = 0;
    seats.sort((n1, n2) => n1 - n2);
    students.sort((n1, n2) => n1 - n2);
    // i did not know that typescript sort 
    // lexicographically. LOL. 

    // console.log(seats);
    // console.log(students)

    for (let i = 0; i < seats.length; i++) {
        res += Math.abs(seats[i] - students[i]);
    }
    return res;
};