export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'buttonText',
            title: 'Button text',
            type: 'string',
        },
        {
            name: 'product',
            title: 'Product',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'string',
        },
        {
            name: 'smallText',
            title: 'Small text',
            type: 'string',
        },
        {
            name: 'middleText',
            title: 'Middle text',
            type: 'string',
        },
        {
            name: 'largeText',
            title: 'Large text',
            type: 'string',
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'string',
        },
        {
            name: 'saleTime',
            title: 'SaleTime',
            type: 'string',
        },
    ],
};