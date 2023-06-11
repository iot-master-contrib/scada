package api

import (
	"github.com/gin-gonic/gin"
	"github.com/iot-master-contrib/scada/types"
	"github.com/zgwit/iot-master/v3/pkg/curd"
)

// @Summary 查询HTML组件数量
// @Schemes
// @Description 查询HTML组件数量
// @Tags html
// @Param search body ParamSearch true "查询参数"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[int64] 返回HTML组件数量
// @Router /html/count [post]
func noopHtmlCount() {}

// @Summary 查询HTML组件
// @Schemes
// @Description 查询HTML组件
// @Tags html
// @Param search body ParamSearch true "查询参数"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyList[types.HmiHtml] 返回HTML组件信息
// @Router /html/search [post]
func noopHtmlSearch() {}

// @Summary 查询HTML组件
// @Schemes
// @Description 查询HTML组件
// @Tags html
// @Param search query ParamList true "查询参数"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyList[types.HmiHtml] 返回HTML组件信息
// @Router /html/list [get]
func noopHtmlList() {}

// @Summary 创建HTML组件
// @Schemes
// @Description 创建HTML组件
// @Tags html
// @Param search body types.HmiHtml true "HTML组件信息"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiHtml] 返回HTML组件信息
// @Router /html/create [post]
func noopHmiHtmlCreate() {}

// @Summary 获取HTML组件
// @Schemes
// @Description 获取HTML组件
// @Tags html
// @Param id html int true "HTML组件ID"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiHtml] 返回HTML组件信息
// @Router /html/{id} [get]
func noopHtmlGet() {}

// @Summary 修改HTML组件
// @Schemes
// @Description 修改HTML组件
// @Tags html
// @Param id html int true "HTML组件ID"
// @Param html body types.HmiHtml true "HTML组件信息"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiHtml] 返回HTML组件信息
// @Router /html/{id} [post]
func noopHtmlUpdate() {}

// @Summary 删除HTML组件
// @Schemes
// @Description 删除HTML组件
// @Tags html
// @Param id html int true "HTML组件ID"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiHtml] 返回HTML组件信息
// @Router /html/{id}/delete [get]
func noopHmiHtmlDelete() {}

// @Summary 导出HTML组件
// @Schemes
// @Description 导出HTML组件
// @Tags product
// @Accept json
// @Produce octet-stream
// @Router /html/export [get]
func noopHmiHtmlExport() {}

// @Summary 导入HTML组件
// @Schemes
// @Description 导入HTML组件
// @Tags product
// @Param file formData file true "压缩包"
// @Accept mpfd
// @Produce json
// @Success 200 {object} ReplyData[int64] 返回HTML组件数量
// @Router /html/import [post]
func noopHmiHtmlImport() {}

func htmlRouter(app *gin.RouterGroup) {

	app.POST("/count", curd.ApiCount[types.HmiHtml]())

	app.POST("/search", curd.ApiSearch[types.HmiHtml]("id", "name", "icon", "html", "collection", "version", "updated", "created"))

	app.GET("/list", curd.ApiList[types.HmiHtml]("id", "name", "icon", "html", "collection", "version", "updated", "created"))

	app.POST("/create", curd.ApiCreateHook[types.HmiHtml](curd.GenerateRandomId[types.HmiHtml](12), nil))

	app.GET("/:id", curd.ParseParamStringId, curd.ApiGet[types.HmiHtml]())

	app.POST("/:id", curd.ParseParamStringId, curd.ApiUpdateHook[types.HmiHtml](nil, nil,
		"id", "name", "icon", "html", "collection"))

	app.GET("/:id/delete", curd.ParseParamStringId, curd.ApiDelete[types.HmiHtml]())

	app.GET("/export", curd.ApiExport("hmi_html", "hmi_html"))

	app.POST("/import", curd.ApiImport("hmi_html"))

}
