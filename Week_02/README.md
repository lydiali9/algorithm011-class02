## 学习笔记

### 哈希表、映射、集合

#### Hash Table

| 操作       |  时间复杂度  |
| --------   |  :----: |
| search    |  O(1)  |
| insert    |  O(1)  |
| delete    |  O(1)  |

###  树、二叉树、二叉搜索树

`Linked List 是特殊化的树，Tree是特殊化的图`

二叉树的遍历
1. 前序： 根-左-右；
2. 中序： 左-根-右；
3. 后序： 左-右-根；

#### 二叉搜索树的时间复杂度
| 操作       |  时间复杂度  |
| --------   |  :----: |
| search    |  O(log(n))  |
| insert    |  O(log(n))  |
| delete    |  O(log(n))  |

### 堆和二叉堆
| 操作       |  时间复杂度  |
| --------   |  :----: |
| search max        |  O(1)  |
| insert(create)    |  O(log(n)) or O(1) |
| delete max        |  O(log(n))  |