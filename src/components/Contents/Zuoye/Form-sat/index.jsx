/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import './form-sat.scss'
import arrList from './fromlist.json'
export default class FormSat extends Component {
    constructor() {
        super()
        this.state = {
            checkbox: {
                id: '',
                chilid: []
            },
            radio: {
                id: '',
                chilid: ''
            },
            textarea: ""
        }
    }
    headerChange = ({ target }, obj = '', text = '') => {

        let name = target.name
        let arrid = this.state.checkbox.chilid
        if (name !== 'textarea') {
            // 复选框 数据处理
            if (name === 'checkbox') {
                if (target.checked) {
                    arrid = [...arrid, text]
                } else {
                    arrid = arrid.filter((item) => item !== text)
                }
            }
        }
        // 赋值
        this.setState({
            [target.name]: target.name === 'textarea' ? target.value : {
                id: obj,
                chilid: target.name === 'radio' ? text : arrid
            }
        });

    }
    btntijiao = (e) => {
        let { checkbox, radio, textarea } = this.state
        if (checkbox.chilid.length === 0 || radio.id === '') {
            return alert('请选择后再提交')
        }

        let arr = []
        checkbox.chilid.map((item) => {
            arr = [...arr, arrList[checkbox.id].optionList[item]]
        })
        let rarr = arrList[radio.id].optionList[radio.chilid]

        console.log(arr)
        console.log(rarr)
        console.log(textarea)
        alert('提交成功')

    }
    render() {
        return (
            <div className="container">
                <div className='frombox'>
                    <form >

                        {
                            arrList.map((item, index) => {
                                return (
                                    <label key={item.id}>
                                        <p>{`${index + 1}.${item.text}`}</p>
                                        {
                                            item.type !== 'textarea' ? item.optionList.map((items, indexs) => {
                                                return (
                                                    <label className='from-laber' key={items.id}  >
                                                        <input type={item.type}
                                                            onChange={(e) => { this.headerChange(e, index, indexs) }}
                                                            name={item.type}
                                                        />
                                                        <span>
                                                            {items.text}
                                                        </span>
                                                    </label>
                                                )
                                            }) : <label className='from-laber' ><textarea className='textbox' name={item.type} value={this.state.textarea} onChange={this.headerChange}></textarea></label>
                                        }
                                    </label>

                                )
                            })
                        }

                        <button className="button" type="button" onClick={this.btntijiao}>提交</button>



                    </form>
                </div>
            </div>
        )
    }
}