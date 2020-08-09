/**
 * @param {number[][]} M
 * @return {number}
 */
/**
 * 思路分析：
 *  1. DFS BFS 时间复杂度为O(n^2) 空间复杂度为O(n)
 *  2. 并差集
 */
var findCircleNum = function(M) {
    if (M.length == 0) return 0;

    let count = 0;
    let visited = new Array(M.length);

    for (var i = 0; i < M.length; i++) {
        if(!visited[i]) {
            dfs(M, visited, i);
            count++;
        }
    }

    return count;
};

var dfs = function(M, visited, i) {
    for(let j = 0; j < M[0].length; j++) {
        if(M[i][j] == 1 && !visited[j]) {
            visited[j] = 1;
            dfs(M, visited, j);
        }
    }
}

/**
 * 2. 并差集
 */

// class UnionFind {
//     constructor(n) {
//         this.count = n;
//         this.parent = new Array(n);
//         this.rank = new Array(n);

//         for (var i = 0; i < n; i++) {
//             this.parent[i] = i;
//         }
//     }

//     find(p) {
//         while(p !== this.parent[p]) {
//             this.parent[p] = this.parent[this.parent[p]]; // path compression by halving
//             p = this.parent[p];
//         }

//         return p;
//     }

//     union(p, q) {
//         let rootP = this.find(p);
//         let rootQ = this.find(q);

//         if (rootP == rootQ) return;
//         if (this.rank[rootP] < this.rank[rootQ]) {
//             this.parent[rootP] = rootQ;
//         } else {
//             this.parent[rootQ] = rootP;
//             if (this.rank[rootP] == this.rank[rootQ]) {
//                 this.rank[rootP]++;
//             }
//         }
//         this.count--;
//     }

//     count() {
//         return this.count;
//     }
// }

var findCircleNum = function(M) {
    if (M.length == 0) return 0;

    // 初始化 构建并查集
    let count = M.length;
    let parent = new Array(M.length);
    let rank = new Array(M.length);

    for (var i = 0; i < M.length; i++) {
        parent[i] = i;
        rank[i] = 1;
    }

    let find = function(p) {
        while(p !== parent[p]) {
            parent[p] = parent[parent[p]]; // path compression by halving
            p = parent[p];
        }

        return p;
    }

    let union = function(p, q) {
        let rootP = find(p);
        let rootQ = find(q);

        if (rootP == rootQ) return;
        if (rank[rootP] < rank[rootQ]) {
            parent[rootP] = rootQ;
        } else if (rank[rootP] > rank[rootQ]) {
            parent[rootQ] = rootP;
        } else {
            parent[rootQ] = rootP;
            rank[rootP]++;
        }
        count--;
    }

    // 循环组合
    for (var i = 0; i < M.length; i++) {
        for (var j = 0; j < M.length; j++) {
            if(M[i][j] == 1) union(i, j);
        }
    }

    return count;
};