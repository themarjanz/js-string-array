const products = [
    'Dell hardcore i28 200GB laptop',
    'iphone 1TB camera flashlight phone',
    'yellow laptop with black camera',
    '1X59 lenovo commercial yoga laptop',
    'Lg supernova Laptop',
    'HTC low price phone',
    'purple color phone with Laptop'
]
const searching = 'Dell';
//indexOf
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLocaleLowerCase()) != -1) {
        // output.push(product);
    }
}

// console.log(output);
for (const product of products) {
    if (product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())) {
        output.push(product);

    }
}

// console.log(output);

// starts with

for (const product of products) {
    if (product.toLocaleLowerCase().startsWith(searching.toLocaleLowerCase())) {
        output.push(product);
    }

}

console.log(output);