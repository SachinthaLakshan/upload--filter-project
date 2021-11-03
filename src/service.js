const flows = {
    "1": [
        {"fromProcessId":1,"toProcessId":2},
        {"fromProcessId":1,"toProcessId":3},
        {"fromProcessId":2,"toProcessId":4}
    ],
    "2": [
        {"fromProcessId":5,"toProcessId":7},
        {"fromProcessId":6,"toProcessId":7},
        {"fromProcessId":7,"toProcessId":9},
        {"fromProcessId":7,"toProcessId":10},
        {"fromProcessId":7,"toProcessId":11},
        {"fromProcessId":8,"toProcessId":11},
        {"fromProcessId":9,"toProcessId":12},
        {"fromProcessId":10,"toProcessId":12},
        {"fromProcessId":11,"toProcessId":12}
    ],
    "3": [
        {"fromProcessId":13,"toProcessId":16}, {"fromProcessId":13,"toProcessId":17}, {"fromProcessId":14,"toProcessId":17},
        {"fromProcessId":14,"toProcessId":18}, {"fromProcessId":15,"toProcessId":18}, {"fromProcessId":15,"toProcessId":19},
        {"fromProcessId":16,"toProcessId":20}, {"fromProcessId":16,"toProcessId":21}, {"fromProcessId":17,"toProcessId":21},
        {"fromProcessId":17,"toProcessId":22}, {"fromProcessId":18,"toProcessId":21}, {"fromProcessId":18,"toProcessId":22},
        {"fromProcessId":18,"toProcessId":23}, {"fromProcessId":20,"toProcessId":24}, {"fromProcessId":20,"toProcessId":25},
        {"fromProcessId":20,"toProcessId":26}, {"fromProcessId":22,"toProcessId":25}, {"fromProcessId":24,"toProcessId":28},
        {"fromProcessId":25,"toProcessId":27},{"fromProcessId":26,"toProcessId":30},{"fromProcessId":28,"toProcessId":29},
        {"fromProcessId":27,"toProcessId":29}
    ]
}

const process = [
    {"id":1,"flowId":1,"name":"Process A","description":"Process A that belongs to a simple flow","avgDuration":120},
    {"id":2,"flowId":1,"name":"Process B","description":"Process B that belongs to a simple flow","avgDuration":27},
    {"id":3,"flowId":1,"name":"Process C","description":"Process C that belongs to a simple flow","avgDuration":400},
    {"id":4,"flowId":1,"name":"Process D","description":"Process D that belongs to a simple flow","avgDuration":12},
    {"id":5,"flowId":2,"name":"Process 5","description":"Process 5 that belongs to a mid size flow","avgDuration":120},
    {"id":6,"flowId":2,"name":"Process 6","description":"Process 6 that belongs to a mid size flow","avgDuration":27},
    {"id":7,"flowId":2,"name":"Process 7","description":"Process 7 that belongs to a mid size flow","avgDuration":400},
    {"id":8,"flowId":2,"name":"Process 8","description":"Process 8 that belongs to a mid size flow","avgDuration":12},
    {"id":9,"flowId":2,"name":"Process 9","description":"Process 9 that belongs to a mid size flow","avgDuration":120},
    {"id":10,"flowId":2,"name":"Process 10","description":"Process 10 that belongs to a mid size flow","avgDuration":27},
    {"id":11,"flowId":2,"name":"Process 11","description":"Process 11 that belongs to a mid size flow","avgDuration":400},
    {"id":12,"flowId":2,"name":"Process 12","description":"Process 12 that belongs to a mid size flow","avgDuration":12},
    {"id":13,"flowId":3,"name":"Process 13","description":"Process 13 that belongs to a large flow","avgDuration":123},
    {"id":14,"flowId":3,"name":"Process 14","description":"Process 14 that belongs to a large flow","avgDuration":433},
    {"id":15,"flowId":3,"name":"Process 15","description":"Process 15 that belongs to a large flow","avgDuration":5},
    {"id":16,"flowId":3,"name":"Process 16","description":"Process 16 that belongs to a large flow","avgDuration":4643},
    {"id":17,"flowId":3,"name":"Process 17","description":"Process 17 that belongs to a large flow","avgDuration":567},
    {"id":18,"flowId":3,"name":"Process 18","description":"Process 18 that belongs to a large flow","avgDuration":88888},
    {"id":19,"flowId":3,"name":"Process 19","description":"Process 19 that belongs to a large flow","avgDuration":540},
    {"id":20,"flowId":3,"name":"Process 20","description":"Process 20 that belongs to a large flow","avgDuration":2020},
    {"id":21,"flowId":3,"name":"Process 21","description":"Process 21 that belongs to a large flow","avgDuration":21},
    {"id":22,"flowId":3,"name":"Process 22","description":"Process 22 that belongs to a large flow","avgDuration":8787},
    {"id":23,"flowId":3,"name":"Process 23","description":"Process 23 that belongs to a large flow","avgDuration":3322},
    {"id":24,"flowId":3,"name":"Process 24","description":"Process 24 that belongs to a large flow","avgDuration":109},
    {"id":25,"flowId":3,"name":"Process 25","description":"Process 25 that belongs to a large flow","avgDuration":2088},
    {"id":26,"flowId":3,"name":"Process 26","description":"Process 26 that belongs to a large flow","avgDuration":32},
    {"id":27,"flowId":3,"name":"Process 27","description":"Process 27 that belongs to a large flow","avgDuration":166},
    {"id":28,"flowId":3,"name":"Process 28","description":"Process 28 that belongs to a large flow","avgDuration":90},
    {"id":29,"flowId":3,"name":"Process 29","description":"Process 29 that belongs to a large flow","avgDuration":90},
    {"id":30,"flowId":3,"name":"Process 30","description":"Process 30 that belongs to a large flow","avgDuration":11}
]

export const getFlowTypes = () => {
    return [{"id":1,"name":"Simple Flow"},{"id":2,"name":"Mid-size Flow"},{"id":3,"name":"Large Flow"}]
}

export const getFlow = (id) => {
    return flows[id]
}

export const getProcessDetails = (id) => {
    const index = id - 1
    if (index >= 0 && index < 30) {
        return process[id-1]
    }
}