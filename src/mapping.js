let traverseClause = (clause) => {
    let map = {};
    let op = clause.condition.right.value;
    assert.equal("number", typeof(op), "malformed if statement, right side is not a number");

    switch (relational.Operator) {
        case "==":
            map[op] = blockToOp(stmt.Then);
            map[op + 1] = blockToOp(stmt.Else)
            break;

        case ">":
            map[op] = blockToOp(stmt.else)
            map[op + 1] = blockToOp(stmt.then)
            break;

        case "<=":
            if (stmt.then.length == 1) { /* ... */ }
            if (stmt.else.length == 1) { return traverseClause(stmt.else); }

            throw new Error("malformed if statement in execution loop");
            break;

        default:
            throw new Error("malformed if statement, invalid relational operator");
            break;

    }

    return map;
}

let blockToOp = (block) => {

}



