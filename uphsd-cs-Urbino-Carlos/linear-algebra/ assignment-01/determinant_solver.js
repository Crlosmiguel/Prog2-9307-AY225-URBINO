/**
 * =====================================================
 * Student Name    : Carlos Miguel M. Urbino
 * Course          : Math 101 — Linear Algebra
 * Assignment      : Programming Assignment 1 — 3x3 Matrix Determinant Solver
 * School          : University of Perpetual Help System DALTA, Molino Campus
 * Date            : [DATE COMPLETED]
 * GitHub Repo     : https://github.com/[your-username]/uphsd-cs-urbino-carlos
 * Runtime         : Node.js
 * =====================================================
 */

const matrix = [
    [3,5,4],
    [6,2,1],
    [4,3,5]
];

function printMatrix(m){
    console.log("┌               ┐");
    m.forEach(r=>{
        console.log(`│  ${r[0]}  ${r[1]}  ${r[2]}  │`);
    });
    console.log("└               ┘");
}

function computeMinor(a,b,c,d){
    return (a*d)-(b*c);
}

function solveDeterminant(m){

    const line="=".repeat(52);

    console.log(line);
    console.log("  3x3 MATRIX DETERMINANT SOLVER");
    console.log("  Student: Carlos Miguel M. Urbino");
    console.log("  Assigned Matrix:");
    console.log(line);

    printMatrix(m);

    console.log(line);
    console.log("\nExpanding along Row 1 (cofactor expansion):\n");

    const minor11 = computeMinor(m[1][1],m[1][2],m[2][1],m[2][2]);
    console.log(
    `  Step 1 — Minor M₁₁: det([${m[1][1]},${m[1][2]}],[${m[2][1]},${m[2][2]}]) = ${minor11}`
    );

    const minor12 = computeMinor(m[1][0],m[1][2],m[2][0],m[2][2]);
    console.log(
    `  Step 2 — Minor M₁₂: det([${m[1][0]},${m[1][2]}],[${m[2][0]},${m[2][2]}]) = ${minor12}`
    );

    const minor13 = computeMinor(m[1][0],m[1][1],m[2][0],m[2][1]);
    console.log(
    `  Step 3 — Minor M₁₃: det([${m[1][0]},${m[1][1]}],[${m[2][0]},${m[2][1]}]) = ${minor13}`
    );

    const c11 = m[0][0]*minor11;
    const c12 = -m[0][1]*minor12;
    const c13 = m[0][2]*minor13;

    console.log();
    console.log(`  Cofactor C₁₁ = (+1) × ${m[0][0]} × ${minor11} = ${c11}`);
    console.log(`  Cofactor C₁₂ = (-1) × ${m[0][1]} × ${minor12} = ${c12}`);
    console.log(`  Cofactor C₁₃ = (+1) × ${m[0][2]} × ${minor13} = ${c13}`);

    const det = c11 + c12 + c13;

    console.log();
    console.log(`  det(M) = ${c11} + (${c12}) + ${c13}`);
    console.log(line);
    console.log(`  ✓  DETERMINANT = ${det}`);
    console.log(line);
}

solveDeterminant(matrix);