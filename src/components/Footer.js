import React from 'react';
import styled from 'styled-components';
import { ModalFooter } from 'react-bootstrap';

const Styles = styled.div`
    .footer{
        margin-top: 30px;
        background-color: #E87121;
        border: none;
        clear: both;

    }
`;

export const Footer = () => (
    <Styles>
        <React.Fragment>
        <footer class="footer mt-auto py-3">
            <div class="container">
                <span class="text-muted">Place sticky footer content here.</span>
            </div>
        </footer>
        </React.Fragment>
    </Styles>
)
