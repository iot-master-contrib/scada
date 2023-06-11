package types

import "time"

type HmiComponent struct {
	Id         string                `json:"id,omitempty" xorm:"pk"`
	Name       string                `json:"name,omitempty"`                  //名称
	Icon       string                `json:"icon,omitempty"`                  //图标
	Type       string                `json:"type,omitempty"`                  //类型 line shape html ...
	Extends    map[string]any        `json:"extends,omitempty" xorm:"json"`   //继承基础组件
	Meta       map[string]any        `json:"meta,omitempty" xorm:"json"`      //初始化参数
	Properties []HmiProperty         `json:"properties,omitempty"`            //属性配置
	Bindings   []HmiComponentBinding `json:"bindings,omitempty"`              //数据绑定
	Events     []HmiComponentEvent   `json:"events,omitempty"`                //事件绑定
	Listeners  map[string]string     `json:"listeners,omitempty" xomr:"json"` //组件事件监听
	Effects    []string              `json:"effects,omitempty"`               //HTML组件监听
	Html       string                `json:"html,omitempty"`                  //HTML绘制函数
	Collection string                `json:"collection,omitempty"`            //集合名称
	Version    int                   `json:"version,omitempty" xorm:"version"`
	Updated    time.Time             `json:"updated" xorm:"updated"`
	Created    time.Time             `json:"created" xorm:"created"`
}

type HmiComponentBinding struct {
	Name  string `json:"name,omitempty"`
	Label string `json:"label,omitempty"`
	Type  string `json:"type,omitempty"`
}

type HmiComponentEvent struct {
	Name  string `json:"name,omitempty"`
	Label string `json:"label,omitempty"`
}

type HmiProperty struct {
	Name    string              `json:"name,omitempty"`
	Path    string              `json:"path,omitempty"`
	Type    string              `json:"type,omitempty"`
	Default any                 `json:"default,omitempty"`
	Options []HmiPropertyOption `json:"options,omitempty"`
	Max     int                 `json:"max,omitempty"`
	Min     int                 `json:"min,omitempty"`
	Step    int                 `json:"step,omitempty"`
}

type HmiPropertyOption struct {
	Name  string `json:"name,omitempty"`
	Value any    `json:"value,omitempty"`
}
