# data-viewer

The data being viewed is an array of js objects with 2 properties; a String label and a Number value between 0 and 100:

```
[
    {label: '0', value: 42},
    {label: '1', value: 35},
    {label: '2', value: 57},
    ...
]
```

Two displays of the data must be made.

The first is a data table. The table must be made of two components:
1. A data row with the ability to increment, decrement and remove the data row.
2. A data table with a title, list of data rows and a panel for adding a new data item.

The second display is a bar chart where each bar coresponds to a data row in the table.

Modification of the data in the table must be reflected immediately in the data chart.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
