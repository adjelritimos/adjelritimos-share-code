import React from 'react'
import Share from './share'

const HeaderNoSession = ({ language, theme, setLanguage, setTheme }) => {
    return (
        <header className="">
            <div className="w-100 p-2 d-flex justify-content-between bg-white">
                <img src="/logo.png" alt="CodeShare Logo" width="80" height="auto" />
                <div className="d-grid gap-2 d-flex justify-content-md-end">

                    <button className="btn btn-info rounded-pill" type="button" data-bs-toggle="modal" data-bs-target="#shareCodeModal" aria-controls="offcanvasRight">
                        <i className="fas fa-users text-white"></i>
                        <span className="text-white ms-2">Partilhar</span>
                    </button>

                    <button className="btn btn-info rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <i className="fas fa-cog text-white"></i>
                    </button>

                    <div className="offcanvas mt-5 rounded-4 w-25 offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasRightLabel">Configurações</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div>
                                <p className='fw-bold p-0 m-0'>Sintaxe de linguagens</p>
                                <select value={language} onChange={(e) => setLanguage(e.target.value)} className="form-select border-info" aria-label="Default select example">
                                    <option selected disabled>Selecione</option>
                                    <option value="javascript">JavaScript</option>
                                    <option value="python">Python</option>
                                    <option value="java">Java</option>
                                    <option value="csharp">C#</option>
                                    <option value="cpp">C++</option>
                                    <option value="ruby">Ruby</option>
                                    <option value="php">PHP</option>
                                    <option value="swift">Swift</option>
                                    <option value="go">Go</option>
                                    <option value="typescript">TypeScript</option>
                                    <option value="kotlin">Kotlin</option>
                                    <option value="rust">Rust</option>
                                    <option value="scala">Scala</option>
                                    <option value="perl">Perl</option>
                                    <option value="haskell">Haskell</option>
                                    <option value="lua">Lua</option>
                                    <option value="r">R</option>
                                    <option value="bash">Bash/Shell</option>
                                    <option value="dart">Dart</option>
                                    <option value="elixir">Elixir</option>
                                    <option value="erlang">Erlang</option>
                                    <option value="fortran">Fortran</option>
                                    <option value="groovy">Groovy</option>
                                    <option value="julia">Julia</option>
                                    <option value="objective-c">Objective-C</option>
                                    <option value="powershell">PowerShell</option>
                                    <option value="sql">SQL</option>
                                    <option value="vba">VBA</option>
                                    <option value="vbnet">VB.NET</option>
                                    <option value="zig">Zig</option>
                                    <option value="cobol">COBOL</option>
                                    <option value="fsharp">F#</option>
                                    <option value="ocaml">OCaml</option>
                                    <option value="prolog">Prolog</option>
                                    <option value="solidity">Solidity</option>
                                    <option value="verilog">Verilog</option>
                                    <option value="vhdl">VHDL</option>
                                </select>
                            </div>

                            <div>
                                <p className='fw-bold p-0 m-0'>Tema</p>
                                <select value={theme} onChange={(e) => setTheme(e.target.value)} className="form-select border-info" aria-label="Default select example">
                                    <option selected disabled>Selecine</option>
                                    <option value="vs-light">Claro</option>
                                    <option value="vs-dark">Escuro</option>
                                    <option value="vs-classic">Classico</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Share />

        </header>
    )
}

export default HeaderNoSession