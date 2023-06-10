package types

import (
	"time"
)

type HmiProject struct {
	Id      string    `json:"id,omitempty"  xorm:"pk"`
	Name    string    `json:"name,omitempty"`
	Desc    string    `json:"desc,omitempty"`
	Width   int       `json:"width,omitempty"`
	Height  int       `json:"height,omitempty"`
	Pages   []HmiPage `json:"pages,omitempty" xorm:"json"`
	Version int       `json:"version,omitempty" xorm:"version"`
	Updated time.Time `json:"updated,omitempty" xorm:"updated"`
	Created time.Time `json:"created,omitempty" xorm:"created"`
}

type HmiPage struct {
	Name            string `json:"name,omitempty"`
	Content         any    `json:"content,omitempty"`
	BackgroundColor string `json:"background_color,omitempty"`
	BackgroundImage string `json:"background_image,omitempty"`
}
