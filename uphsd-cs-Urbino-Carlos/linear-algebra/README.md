# 3x3 Matrix Determinant Solver

## Student Information

**Name:** Carlos Miguel M. Urbino
**Course:** Math 101 — Linear Algebra
**School:** University of Perpetual Help System DALTA – Molino Campus
**Assignment:** Programming Assignment 1 — 3x3 Matrix Determinant Solver

---

## Project Description

This project calculates the **determinant of a 3×3 matrix** using the **cofactor expansion method along the first row**.

The program prints the full step-by-step solution, including:

* The assigned matrix
* The 2×2 minors
* The cofactor calculations
* The final determinant result

The assignment includes two implementations:

* **Java** (Object-Oriented Programming)
* **JavaScript** (Scripting using Node.js)

---

## Assigned Matrix

| 3 | 5 | 4 |
| - | - | - |
| 6 | 2 | 1 |
| 4 | 3 | 5 |

---

## Determinant Result

Determinant = **-69**

---

## Files in This Repository

* `DeterminantSolver.java` — Java implementation of the determinant solver
* `determinant_solver.js` — JavaScript implementation using Node.js
* `README.md` — Project documentation

---

## How to Run the Program

### Java Version

Compile the program:

```
javac DeterminantSolver.java
```

Run the program:

```
java DeterminantSolver
```

### JavaScript Version

Run the script using Node.js:

```
node determinant_solver.js
```

---

## Algorithm Used

The determinant of a **3×3 matrix** is computed using **cofactor expansion along the first row**:

det(M) = a₁₁C₁₁ − a₁₂C₁₂ + a₁₃C₁₃

Each cofactor uses the **2×2 determinant formula**:

det = (a × d) − (b × c)

---

## Author

Carlos Miguel M. Urbino
