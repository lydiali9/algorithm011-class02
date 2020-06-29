## 学习笔记

### 组、链表、跳表

#### Array

| 操作       |  时间复杂度  |
| --------   |  :----: |
| prepend    |  O(1)  |
| append     |  O(1)  |
| lookup     |  O(1)  |
| insert     |  O(n)  |
| delete     |  O(n)  |


#### 链表
| 操作       |  时间复杂度  |
| --------   |  :----: |
| prepend    |  O(1)  |
| append     |  O(1)  |
| lookup     |  O(n)  |
| insert     |  O(1)  |
| delete     |  O(1)  |

#### 参考链接
[Java 源码分析（ArrayList）](http://developer.classpath.org/doc/java/util/ArrayList-source.html)
[Linked List 的标准实现代码](geeksforgeeks.org/implementing-a-linked-list-in-java-using-class/)
[Linked List 示例代码](http://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/code/LinkedList.java)
[Java 源码分析（LinkedList）](http://developer.classpath.org/doc/java/util/LinkedList-source.html)
[LRU Cache - Linked list： LRU 缓存机制](https://leetcode-cn.com/problems/lru-cache/)
[Redis - Skip List：跳跃表、为啥 Redis 使用跳表（Skip List）而不是使用 Red-Black]( https://www.zhihu.com/question/20202931)

#### 练习题

1. [两数之和（近半年内，字节跳动在面试中考查此题达到 152 次](https://leetcode-cn.com/problems/two-sum/)
2. [盛最多水的容器（腾讯、百度、字节跳动在近半年内面试常考） ](https://leetcode-cn.com/problems/container-with-most-water/)
3. [移动零（华为、字节跳动在近半年内面试常考） ](https://leetcode-cn.com/problems/move-zeroes/)
4. [爬楼梯（阿里巴巴、腾讯、字节跳动在半年内面试常考） ](https://leetcode.com/problems/climbing-stairs/)
5. [三数之和（国内、国际大厂历年面试高频老题） ](https://leetcode-cn.com/problems/3sum/)

##### Linked List 实战题目
1. [反转链表（字节跳动、亚马逊在半年内面试常考）]( https://leetcode-cn.com/problems/reverse-linked-list/?utm_source=LCUS&utm_medium=ip_redirect_q_uns&utm_campaign=transfer2china)
2. [两两交换链表中的节点（阿里巴巴、字节跳动在半年内面试常考）]( https://leetcode.com/problems/swap-nodes-in-pairs/)
3. [环形链表（阿里巴巴、字节跳动、腾讯在半年内面试常考） ](https://leetcode.com/problems/linked-list-cycle/)
4. [环形链表](II https://leetcode.com/problems/linked-list-cycle-ii/)
5. [K 个一组翻转链表（字节跳动、猿辅导在半年内面试常考） ](https://leetcode.com/problems/reverse-nodes-in-k-group/)

### 栈和队列

#### Stack

先进后出

```javascript
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
    this.isEmpty = isEmpty;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top - 1];
}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}

function isEmpty() {
    return this.dataStore.length === 0;
}

var s = new Stack;
s.push('aaaaa');
s.push('bbbbb');
s.push('ccccc');
s.push('ddddd');

console.log('length: ' + s.length());
console.log('first value:' + s.peek());


// 1. asdad(sdasda)(sda)((sad))asd(asddasd)
// ((asd)sad)(sfasd))sad()(

function isLeagBrackets(str) {
    var s = new Stack();

    for(var i = 0; i < str.length; str++) {
        var item = str[i];
        if(item == '(') {
            s.push(item);
        } else if(item == ")") {
            if(s.isEmpty()) {
                return false;
            } else {
                s.pop();
            }
        }
    }

    return s.isEmpty();
}

console.log('============匹配括号===============');
console.log(isLeagBrackets('asdad(sdasda)(sda)((sad))asd(asddasd)'));
console.log(isLeagBrackets('((asd)sad)(sfasd))sad()('));


// 2. 计算后缀表达式
function caleExp(exp) {
    var s = new Stack();

    for(var i = 0; i < exp.length; i++) {
        var item = exp[i];
        if(['+', '-', '*', '/'].indexOf(item) > -1) {
            var value1 = s.pop();
            var value2 = s.pop();
            var expStr = value2 + item + value1;
            // 计算并取整
            var res = parseInt(eval(expStr));
            // 计算结果压入栈中
            s.push(res.toString());
        } else {
            s.push(item);
        }
    }

    return s.pop();
}
console.log('==========================');
console.log(caleExp(['4', '13', '5', '/', '+']));
```


#### Queue

先进先出

```javascript
 function Queen() {
    this.dataStroe = [];
    this.enqueen = enqueen;
    this.dequeen = dequeen;
    this.front = front;
    this.back = back;
    this.empty = empty;
    this.toString = toString;
    this.size = size;
}

function enqueen(element) {
    this.dataStroe.push(element);
}

function dequeen() {
    return this.dataStroe.shift();
}

function front() {
    return this.dataStroe[0];
}

function back() {
    return this.dataStroe[this.dataStroe.length - 1];
}

function empty() {
    return this.dataStroe.length > 0 ? true : false;
}

function toString() {
    var str = '';

    for (var i = 0; i < this.dataStroe.length; i++) {
        str += this.dataStroe[i] + '\n';
    }

    return str;
}

function size() {
    return this.dataStroe.length;
}

// var q = new Queen();
// q.enqueen('aaaaaa');
// q.enqueen('bbbbbb');
// q.enqueen('cccccc');
//
// console.log(q.toString());
// q.dequeen();

// console.log(q.toString());

console.log('==============约瑟夫环=============');

function delRing(arr) {
    // 把数组里面的元素优先放到队列中
    var q = new Queen();
    for (var i = 0; i <= arr.length - 1; i++) {
        q.enqueen(arr[i]);
    }
    var index = 0;
    while (q.size() != 1) {
        // 弹出一个元素判断是否要删除
        var item = q.dequeen();
        // console.log(q.dataStroe);
        index++;
        // 每隔两个要删除一个，那么不是被删除的元素就放回到队列尾部
        if (index % 3 != 0) {
            q.enqueen(item);
        }
    }
    return q.front();
}

var arr = [];
for (var i = 0; i < 10; i++) {
    arr.push(i);
}
console.log(delRing(arr));

console.log('===========斐波那契数列=============');


// JS
var a = 0;
if(true) {
    a = 1;
    function a() {} // 定义函数名变量，指针指向函数内存块
    a = 21;
    console.log('inner:' + a);
}
console.log('outer:' + a);

// 21
// 1
// 注释：函数提升是在块级作用域，但是函数名变量是函数级别的作用域。所以在块级的函数定义的时候，
// 会将函数名变量同步到函数级作用域，实际上，只有这个时候在块级作用域外才能访问到函数定义
```

#### 练习题
[有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)
[最小栈](https://leetcode-cn.com/problems/min-stack/)

[柱状图中最大的矩形](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/)
[滑动窗口最大值](https://leetcode-cn.com/problems/sliding-window-maximum/)

用 add first 或 add last 这套新的 API 改写 Deque 的代码;
分析 Queue 和 Priority Queue 的源码;

[设计循环双端队列](https://leetcode.com/problems/design-circular-deque/)
[接雨水（亚马逊、字节跳动、高盛集团、Facebook 在半年内面试常考)](https://leetcode.com/problems/trapping-rain-water/)














