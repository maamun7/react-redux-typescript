import React, { Component } from 'react';
import Button from './CounterButton';

interface Props {
    increment: () => void;
    decrement: () => void;
    count: number;
}

export default class HopePage extends Component {
    render() {
        const { count, increment, decrement } = this.props as Props;
        return (
            <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '2rem' }}>
                <span> {count} </span>
                <Button handleClick={increment} color={'skyblue'}>
                    {'Increment'}
                </Button>
                <Button handleClick={decrement} color={'orange'}>
                    {'Decrement'}
                </Button>
            </div>
        );
    }
}
