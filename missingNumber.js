// sử dụng set => độ phức tạp O(n) do duyệt tìm set chỉ mất O(1)
const findMissingNumber = (arr) => {
    let n = arr.length;
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < n; i++) {
        if (arr[i] <= min) {
            min = arr[i];
        }
        if (arr[i] >= max) {
            max = arr[i];
        }
    }
    let numSet = new Set(arr);

    for (let i = min; i <= max; i++) {
        if (!numSet.has(i)) {
            return i;
        }
    }
};
// sử dụng công thức tính tổng từ min đến max => độ phức tạp O(n) => tuy nhiên có thể gây tràn số nếu số quá lớn
const findMissingNumber2 = (arr) => {
    let n = arr.length;
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < n; i++) {
        if (arr[i] <= min) {
            min = arr[i];
        }
        if (arr[i] >= max) {
            max = arr[i];
        }
    }
    let sumNoMissing = max * (max + 1) / 2 - min * (min - 1) / 2;

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    return sumNoMissing - sum;

}
// sử dụng mảng visited để đánh dấu số đã xuất hiện => độ phức tạp O(n)
const findMissingNumber3 = (arr) => {
    let n = arr.length;
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < n; i++) {
        if (arr[i] <= min) {
            min = arr[i];
        }
        if (arr[i] >= max) {
            max = arr[i];
        }
    }
    let visited = new Array(max - min + 1).fill(false);

    for (let i = 0; i < n; i++) {
        visited[arr[i] - min] = true;
    }

    for (let i = 0; i < visited.length; i++) {
        if (!visited[i]) {
            return min + i;
        }
    }
}

console.log(findMissingNumber3([1, 4, 3, 5]));
console.log(findMissingNumber3([1, 3, 4, 5]));
console.log(findMissingNumber3([11, 13, 14, 15]));
console.log(findMissingNumber3([10, 11, 12, 14]));

findMissingNumber([1, 2, 4, 5]);
