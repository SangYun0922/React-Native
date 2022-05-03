import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { boardActions } from '../slices/boardSlice';

function Board() {
    const dispatch = useDispatch();
    const { boardList, status, statusText } = useSelector((state) => state.boardReducer);

    useEffect(() => {
        dispatch(boardActions.getBoardList());
    }, [dispatch])

    return (
        <>
            {
                status === 200 ?
                    <div>
                        <ul>
                            <li>
                                <Link to="/">
                                    <span>
                                        Main
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/board/1">
                                    <span>
                                        금쪽이 등록
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/board/2">
                                    <span>
                                        집나간 금쪽이들
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    :
                    <div>
                        <div>
                            <span>{status}</span>
                        </div>
                        <div>
                            <span>{statusText}</span>
                        </div>
                    </div>
            }
        </>

    );
}

export default Board;