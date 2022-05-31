module.exports = {
    plugins: [
        {
            plugin: require('craco-less'),
            options: {
                noIeCompat: true,
            },
        },
    ],
    webpack: {
        configure: {
            module: {
                rules: [
                    {
                        type: 'javascript/auto',
                        test: /\.mjs$/,
                        use: [],
                    },
                ],
            },
        },
    },
};
