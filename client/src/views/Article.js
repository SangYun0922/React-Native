import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Comment from './Comments';
import { articleActions } from '../slices/articleSlice';

function Article() {
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(articleActions.getArticle(params?.articleId ?? 0));
    }, [dispatch, params?.articleId]);
    return (
        <>
            <div> 게시글 상세 </div>
            <Comment />
        </>
    );
}
export default Article;
