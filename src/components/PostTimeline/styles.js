import styled from "styled-components";

export const ContainerPost = styled.div`
	width: 100%;
	min-height: 275px;
	border-radius: 16px;
	background: #171717;
	margin-bottom: 15px;
	display: flex;
	justify-content: space-between;
`;
export const ContainerImageProfile = styled.div`
	@media (max-width: 710px) {
		display: none;
	}
`;
export const ImageProfile = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 26.5px;
	margin-top: 17px;
	margin-left: 17px;
	object-fit: cover;
`;
export const ContainerContent = styled.div`
	width: 500px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-right: 1rem;
`;
export const UserName = styled.p`
	width: 100%;
	height: 23px;
	font-family: "Lato";
	font-weight: 400;
	font-size: 19px;
	line-height: 22px;
	color: #ffffff;
	margin-top: 20px;
`;
export const Description = styled.p`
	width: 100%;
	min-height: 45px;
	font-family: "Lato";
	font-weight: 400;
	font-size: 17px;
	line-height: 20px;
	color: #b7b7b7;
	margin-top: 10px;
`;
export const ContainerMetadata = styled.div`
	width: 100%;
	height: 155px;
	background: #171717;
	border-radius: 11px;
	border: 1px solid #c4c4c4;
	margin-bottom: 20px;
	margin-top: 1rem;
	cursor: pointer;
`;

export const PostTop = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 5px;
	> div {
		display: flex;
		align-items: center;
	}
	> div > svg {
		margin-left: 10px;
		color: white;
		font-size: 15px;
		cursor: pointer;
	}
`;