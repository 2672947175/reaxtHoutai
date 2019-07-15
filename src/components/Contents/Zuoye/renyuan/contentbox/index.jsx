// 人员信息
import React,{Component} from 'react';
import {namelist} from '../renyuan.json'
import './index.scss'

export default class Contentbox extends Component {
    constructor(props){
        super(props)
        this.state={
           
        }
    }
    render(){
       let namelists =namelist[this.props.isId]
       return (
        <div className="textcon">
           <div className="tecon">
               <img className="imgbox" src={namelists.ioc} alt=""/>
                <ul className="ulbox">
                    <li>姓名：<span>{namelists.name}</span></li>
                    <li>性别：<span>{namelists.sex}</span></li>

                    <li>年龄：<span>{namelists.age}</span></li>
                    <li>籍贯：<span>{namelists.birth}</span></li>
                    <li>职业：<span>{namelists.job}</span></li>
                    <li>过往经历：{
                        namelists.oldPass.map((item,index)=>{
                            return <p className="ptext" key={index}>{item}</p>
                        })
                    }</li>
                    <li>理想：<span>{namelists.ideal}</span></li>
                </ul>
           </div>
        </div>



       )
    }
}