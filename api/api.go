package api

import "github.com/gin-gonic/gin"

func RegisterRoutes(app *gin.RouterGroup) {

	projectRouter(app.Group("/project"))
	componentRouter(app.Group("/component"))
	collectionRouter(app.Group("/collection"))
	imageRouter(app.Group("/image"))
	pathRouter(app.Group("/path"))

}
