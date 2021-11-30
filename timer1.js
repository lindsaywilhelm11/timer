let args = process.argv.slice(2);

const timer1 = (args) => {
    for (count of args) {
        if (count === undefined || isNaN(count) || count <= 0) {
            continue;
        }
    }
    setTimeout(() => {
        process.stdout.write('done');
    }, 1000 * count)
}

timer1(args);