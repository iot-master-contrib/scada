package api

import "github.com/gin-gonic/gin"

func RegisterRoutes(app *gin.RouterGroup) {

	projectRouter(app.Group("/project"))
	componentRouter(app.Group("/component"))
	imageRouter(app.Group("/image"))
	pathRouter(app.Group("/path"))
	htmlRouter(app.Group("/html"))

}
