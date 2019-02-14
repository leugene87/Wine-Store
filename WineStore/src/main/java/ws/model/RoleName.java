package ws.model;

public enum  RoleName {
    ROLE_USER("user"),
    ROLE_ADMIN("admin");
	
    private String value;

    RoleName(final String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return this.getValue();
    }
}