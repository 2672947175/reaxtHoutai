// 内容容器
import React, { Component } from 'react';
import Home from './Homebox/Home'
import ZJJin from './ZJ/ZuJian'
import ZJClass from './ZJ/ZJClass'
import ApiZujian from './Api/ApiZujian'
import LifeCycle from './Api/life-cycle'
import Renyuan from './Zuoye/renyuan'
import Xiala from './Zuoye/Xiala'
import Fromdeng from './Zuoye/Fromdenglu'
import FormSat from './Zuoye/Form-sat'
export default class Contents extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    ComModulesde() {
        let ComModule = ''
        // eslint-disable-next-line default-case
        switch (this.props.ModuleName) {
            case 'ShouYe': ComModule = <Home></Home>
                break;
            case 'ZJJing': ComModule = <ZJJin></ZJJin>
                break;
            case 'ZJClass': ComModule = <ZJClass></ZJClass>
                break;
            case 'ApiJing': ComModule = <ApiZujian></ApiZujian>
                break;
            case 'LifeCycle': ComModule = <LifeCycle></LifeCycle>
                break;
            case 'ZuoYe0710': ComModule = <Renyuan></Renyuan>
                break;
            case 'ZuoYe0710xia': ComModule = <Xiala></Xiala>
                break;
            case 'ZuoYe0711deng': ComModule = <Fromdeng></Fromdeng>
                break;
            case 'ZuoYe0712from': ComModule = <FormSat></FormSat>
                break;
        }
        return ComModule
    }
    render() {
        let ComModule = this.ComModulesde()
        return (
            <div>
                {
                    ComModule
                }
            </div>
        )
    }
}


