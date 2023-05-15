this project is a single paged container structured project 



backend_sanity : 
	npm create sanity@latest -- --coupon javascriptmastery2022


	server start: npm run dev

frontend_sanity: 
	npm create-react-app . --template redux
	npm install @sanity/client @sanity/image-url framer-motion node-sass 
	react-icons