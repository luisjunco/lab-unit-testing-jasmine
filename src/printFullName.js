function printFullName(obj) {
    if (obj == undefined || obj.firstName == undefined || obj.lastName == undefined) {
        return undefined;
    }

    return `${obj.firstName} ${obj.lastName}`;
}