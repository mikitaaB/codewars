const compose = (...fn) => (arg) => fn.reduceRight((a, f) => f(a), arg);