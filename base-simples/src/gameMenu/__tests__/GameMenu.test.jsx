import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { GameMenu } from "../GameMenu";

describe("GameMenu", () => {
  it("renders all main components", () => {
    render(<GameMenu />);

    expect(screen.getByText("Bem-vindo(a)!")).toBeInTheDocument();
    expect(screen.getByText("NOVO JOGO")).toBeInTheDocument();
    expect(screen.getByText("MODO HISTÓRIA")).toBeInTheDocument();
    expect(screen.getByText("CONFIGURAÇÕES")).toBeInTheDocument();
    expect(screen.getByText("CONECTAR A SALA #")).toBeInTheDocument();
  });

  it("renders user profile section", () => {
    render(<GameMenu />);

    expect(screen.getByText("Aluno")).toBeInTheDocument();
    expect(screen.getByAlt("User Avatar")).toBeInTheDocument();
  });
});
