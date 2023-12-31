### Loops
- Loops in programming are control structures that allow a set of instructions to be repeated multiple times.

- Loops help in reducing the redundancy in code and improving it's efficiency.

#### For Loop:
```
for (initialization; condition; iteration) {
    // Code block to be repeated as long as the condition is true
}

Example:

for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

#### While Loop:
```
while (condition) {
    // Code block to be repeated as long as the condition is true
}

Example:

let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

#### Do-While Loop:
```
do {
    // Code block to be repeated at least once, and then as long as the condition is true
} while (condition);


Example:

let i = 0;

do {
    console.log(i);
    i++;
} while (i < 5);
```