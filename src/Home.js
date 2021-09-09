import React from 'react';
import { Layout } from './components/Layout';
import { Portada } from './components/Portada'
import styled from 'styled-components';


const Styles = styled.div`
    .top{
        text-align:center;
        margin-top: 20px;
        a{
            text-decoration: none;
            font-size: 30px;
            font-family: 'Poppins', sans-serif;
            color: #0074D9;
        }
    }
`;

export const Home = () => (
    <Styles>
        <React.Fragment>
            <Portada/>
            <Layout>
                <h2>Restaurantes</h2>
                <ul class="list-group">
                    <li class="list-group-item">1. El Tío Bistró</li>
                    <li class="list-group-item">2. Primuseum</li>
                    <li class="list-group-item">3. Cafe Gourmand</li>
                    <li class="list-group-item">4. Ashot Shawarma</li>
                    <li class="list-group-item">5. Alquimista Montevideo</li>
                    <li class="list-group-item">6. Es Mercat</li>
                    <li class="list-group-item">7. estrecho</li>
                    <li class="list-group-item">8. Restaurante Tandory</li>
                    <li class="list-group-item">9. RUDY Burgers</li>
                    <li class="list-group-item">10. Candy Bar</li>
                    <li class="list-group-item">11. Baco Vino y Bistró</li>
                </ul>
                <div className="top">
                    <a href="/grafica">Top Restaurantes</a>
                </div>
            </Layout>
        </React.Fragment>
    </Styles>
)