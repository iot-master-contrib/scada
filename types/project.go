package types

import "github.com/zgwit/iot-master/v3/model"

type HmiProject struct {
	Id      string      `json:"id,omitempty"  xorm:"pk"`
	Name    string      `json:"name,omitempty"`
	Desc    string      `json:"desc,omitempty"`
	Pages   []HmiPage   `json:"pages,omitempty"`
	Devices []HmiDevice `json:"devices,omitempty"`
	Created model.Time  `json:"created,omitempty" xorm:"created"`
}

type HmiPage struct {
	Id      string `json:"id,omitempty"`
	Content string `json:"content,omitempty"`
}

type HmiDevice struct {
	Id        string `json:"id,omitempty"`
	ProductId string `json:"productId,omitempty"`
	Name      string `json:"name,omitempty"`
}
