import * as React from "react";
import { Navbar, Nav, Dropdown, Button } from "react-bootstrap";
import "./Header.css";

type AppProps = {
    algorithm: string;
    mode: string;
    handleClickAlgorithm: (algorithm: any) => any;
    handleClickMode: (mode: any) => any;
};

export const Header = ({
    algorithm,
    mode,
    handleClickAlgorithm,
    handleClickMode,
}: AppProps) => {
    return (
        <Navbar bg="primary" expand="lg">
            <Navbar.Brand href="">Sort Visualizer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            {algorithm}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Button
                                name="Bubble Sort"
                                onClick={handleClickAlgorithm}
                            >
                                Bubble Sort
                            </Button>
                            <Button
                                name="Quick Sort"
                                onClick={handleClickAlgorithm}
                            >
                                Quick Sort
                            </Button>
                            <Button
                                name="Insertion Sort"
                                onClick={handleClickAlgorithm}
                            >
                                Insertion Sort
                            </Button>
                            <Button
                                name="Merge Sort"
                                onClick={handleClickAlgorithm}
                            >
                                Merge Sort
                            </Button>
                            <Button
                                name="Selection Sort"
                                onClick={handleClickAlgorithm}
                            >
                                Selection Sort
                            </Button>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button
                        className="reset-btn"
                        name="Reset"
                        onClick={handleClickMode}
                    >
                        Reset
                    </Button>
                    <Button
                        className="sort-btn"
                        name="Sort"
                        disabled={algorithm === "Algorithms"}
                        onClick={handleClickMode}
                    >
                        Sort
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
