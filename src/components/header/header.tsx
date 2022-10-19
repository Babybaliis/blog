import React from "react";
import { Div, InputButtonLog, InputButtonReg, SpanRight, DivTittle} from "./header-style";
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <Div>
            <DivTittle> <Link to={`/`}>Realworld Blog</Link></DivTittle>
            <SpanRight>
                <InputButtonLog value={'Sing In'}/>
                <InputButtonReg value={'Sing Up'}/>
            </SpanRight>

        </Div>
    )
}

export {Header};