package types

import (
	"time"
)

type HmiProject struct {
	Id      string    `json:"id,omitempty"  xorm:"pk"`
	Name    string    `json:"name,omitempty"`
	Desc    string    `json:"desc,omitempty"`
	Pages   []HmiPage `json:"pages,omitempty"`
	Version int       `json:"version,omitempty" xorm:"version"`
	Updated time.Time `json:"updated,omitempty" xorm:"updated"`
	Created time.Time `json:"created,omitempty" xorm:"created"`
}

type HmiPage struct {
	Name    string `json:"name,omitempty"`
	Content string `json:"content,omitempty"`
}
