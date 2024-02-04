function RightRotate(a, n, k)
{
    var arr=[]
	k = k % n;

	for (let i = 0; i < n; i++) {
		if (i < k) {
			arr[i] = a[n + i - k];
		}
		else {
			arr[i]=a[i - k];
		}
	}
    return arr;
}

let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;

console.log(RightRotate(Array, N, K));
