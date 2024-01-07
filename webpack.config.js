export default {
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: ['file-loader'],
            },
        ],
    },
};