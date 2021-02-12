import Document, { Head, Html, Main, NextScript } from "next/document";

class CustomDocument extends Document {
	render() {
		return (
			<Html id="root" lang="en">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default CustomDocument;
