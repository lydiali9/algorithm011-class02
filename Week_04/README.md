## 学习笔记

### 深度优先搜索、广度优先搜索

#### DFS
```
// 递归写法
// JavaScript
const visited = new Set()
const dfs = node => {
  if (visited.has(node)) return
  visited.add(node)
  dfs(node.left)
  dfs(node.right)
}
```

```
// 非递归写法
# Python
def DFS(self, tree): 

	if tree.root is None: 
		return [] 

	visited, stack = [], [tree.root]

	while stack: 
		node = stack.pop() 
		visited.add(node)

		process (node) 
		nodes = generate_related_nodes(node) 
		stack.push(nodes) 

	# other processing work 
	...

```

#### BFS
```
// JavaScript
const bfs = (root) => {
  let result = [], queue = [root]
  while (queue.length > 0) {
    let level = [], n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.pop()
      level.push(node.val) 
      if (node.left) queue.unshift(node.left)
      if (node.right) queue.unshift(node.right)
    }
    result.push(level)
  }
  return result
};
```

### 贪心算法

#### 贪心算法的概括
`贪心算法是一种在每一步选择中都采取在当前状态下最好或最优的选择，从而希望导致结果是全局最好或者最优的算法`

`贪心算法和动态规划的不同在于它对每个子问题的解决方案都做出选择，不能回退；动态规划则会保存以前的运算结果，并根据以前的结果对当前进行选择，有回退功能`

#### 贪心算法的使用场景

`简单的说，问题能够分解成子问题来解决，子问题的最优解能递推到最终问题的最优解，这种子问题最优解称为最优子结构`

### 二分查找

#### 二分查找的前提
1. 目标函数单调性（单点递增或者递减）
2. 存在上下届
3. 能够通过索引访问

#### 代码模版

```
let left = 0;
let right = arr.length - 1;
while (left <= right) {
    let mid = (left + right) >> 1;
    if(arr[mid] == target) {
        return;
    } else if (arr[mid] > target) {
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}
```












